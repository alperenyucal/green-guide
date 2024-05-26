import { IconButton } from '@/components/IconButton';
import { Typography } from '@/components/Typography';
import { Color } from '@/constants/Colors';
import { battery_img, cup_img, image_prefix } from '@/constants/Images';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useAppRoute } from '@/hooks/useAppRoute';
import { imagetoText, sendMessage, summarizeHistory } from '@/service/llm';
import { useChatStore } from '@/store/chatStore';
import { FontAwesome5 } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Bubble, GiftedChat, IMessage, Send } from 'react-native-gifted-chat';
import { v4 as uuidv4 } from 'uuid';

function ChatText({ text }: { text: string }) {
  const navigation = useAppNavigation();
  return text?.split('<Map>').map((t, i) => (
    <View
      key={i}
      style={{
        flexDirection: 'row',
        padding: 8,
        gap: 4,
        flexWrap: 'wrap',
      }}>
      <Typography style={{ color: Color.white }}>
        {t + (i === 0 ? '' : ' ')}
        {i === 1 && (
          <TouchableOpacity
            style={{
              backgroundColor: Color.navy,
              paddingHorizontal: 4,
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
            }}
            onPress={() => {
              navigation.navigate('map');
            }}>
            <FontAwesome5 name="map-marker-alt" size={12} color={Color.white} />
            <Typography
              variant="default"
              style={{
                color: Color.white,
              }}>
              Map
            </Typography>
          </TouchableOpacity>
        )}
      </Typography>
    </View>
  ));
}

const user1 = {
  _id: 1,
  name: 'Green Guide AI',
};

const user2 = {
  _id: 2,
  name: 'User',
};

const initialMessage: IMessage = {
  _id: user1._id,
  text: 'Hello! How can I help you today?',
  createdAt: new Date(),
  user: user1,
};

export function ChatScreen() {
  const isFocused = useIsFocused();

  const { params } = useAppRoute<'chat'>();
  const { conversations, addConversation } = useChatStore();
  const [text, setText] = useState('');

  const conversationId = params?.conversationId;
  const activeConversation = conversationId
    ? conversations.find(c => c.id === conversationId)
    : undefined;

  const [history, setHistory] = useState<[string, string][]>([]);
  const [messages, setMessages] = useState<IMessage[]>(
    activeConversation?.messages || [initialMessage],
  );
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    if (!isFocused && history.length > 0 && hasChanged) {
      summarizeHistory(history).then(res => {
        addConversation({
          id: conversationId || uuidv4(),
          title: res.response,
          messages,
          history,
        });
      });
      setHasChanged(false);
      setHistory([]);
      setMessages([initialMessage]);
    }
    // }, [isFocused]);
  }, [
    addConversation,
    conversationId,
    hasChanged,
    history,
    isFocused,
    messages,
  ]);

  useEffect(() => {
    if (activeConversation) {
      setHistory(activeConversation.history);
      setMessages(activeConversation.messages);
    } else {
      setHistory([]);
      setMessages([initialMessage]);
    }
  }, [activeConversation]);

  const mutation = useMutation({
    mutationFn: imagetoText,
    onSuccess: res => {
      const m: IMessage = {
        _id: messages.length + 1,
        text: res.llm_response,
        createdAt: new Date(),
        user: user1,
      };
      setMessages(prevMessages => [m, ...prevMessages]);
      setHistory(res.history);
      setHasChanged(true);
    },
  });

  return (
    <GiftedChat
      text={text}
      user={user2}
      timeTextStyle={{
        left: {
          color: Color.white,
        },
        right: {
          color: Color.white,
        },
      }}
      renderSend={props => (
        <Send
          textStyle={{
            color: Color.blue,
          }}
          {...props}
        />
      )}
      showAvatarForEveryMessage={false}
      renderActions={() => (
        <IconButton
          onPress={() => {
            const img = {
              battery: battery_img,
              cup: cup_img,
            }[Math.floor(Math.random() * 2) === 0 ? 'battery' : 'cup'];
            setText('');
            const msg: IMessage = {
              _id: messages.length + 1,
              text,
              createdAt: new Date(),
              user: user2,
              image: image_prefix + img,
            };
            setMessages(prevMessages => [msg, ...prevMessages]);
            mutation.mutate({
              prompt: text,
              history,
              image: img,
            });
          }}
          icon="camera"
          style={{
            marginBottom: 8,
            marginLeft: 8,
          }}
        />
      )}
      renderAvatar={() => null}
      renderBubble={props => (
        <Bubble
          renderMessageText={({ currentMessage }) => (
            <ChatText text={currentMessage?.text || ''} />
          )}
          {...props}
          textStyle={{
            left: {
              color: Color.white,
            },
            right: {
              color: Color.white,
            },
          }}
          wrapperStyle={{
            left: {
              alignSelf: 'flex-start',
              backgroundColor: Color.green,
            },
            right: {
              backgroundColor: Color.blue,
            },
          }}
        />
      )}
      bottomOffset={200}
      messages={messages}
      onInputTextChanged={t => {
        setText(t);
      }}
      onSend={([newMessage]) => {
        setMessages(prevMessages => [{ ...newMessage }, ...prevMessages]);
        sendMessage({
          prompt: newMessage.text,
          history,
        }).then(res => {
          const msg: IMessage = {
            _id: messages.length + 1,
            text: res.response,
            createdAt: new Date(),
            user: user1,
          };
          setHistory(res.history);
          setMessages(prevMessages => [msg, ...prevMessages]);
          setHasChanged(true);
        });
      }}
    />
  );
}
