import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type LikeType = {
  id: string;
  authorId: string;
};

type FirebaseQuestions = Record<
  string,
  {
    content: string;
    author: {
      name: string;
      avatar: string;
      id: string;
    };
    isHighlighted?: boolean;
    isAnswered?: boolean;
    id: string;
    likes?: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

type ParsedQuestion = {
  content: string;
  author: {
    name: string;
    avatar: string;
    id: string;
  };
  isHighlighted?: boolean;
  isAnswered?: boolean;
  id: string;
  likes?: LikeType[];
};

type QuestionType = Record<string, ParsedQuestion>;

type RoomType = {
  userId: string;
  title: string;
  questions: FirebaseQuestions;
};

export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<ParsedQuestion[]>([]);
  const [roomAdmin, setRoomAdmin] = useState<string>("");
  const [roomTitle, setRoomTitle] = useState<string>("");
  useEffect(() => {
    const getQuestionsByRoom = async (roomKey: string): Promise<any> => {
      const roomRef = database.ref(`rooms/${roomKey}`);

      roomRef.on("value", async (room) => {
        const roomValue: RoomType = await room.val();
        const { title, userId } = roomValue;

        const unparsedQuestions: FirebaseQuestions = roomValue.questions ?? {};

        const parsedQuestions = Object.entries(unparsedQuestions).map(
          ([id, { content, isAnswered, isHighlighted, author, likes }]) => {
            return {
              id,
              content,
              isAnswered,
              isHighlighted,
              author,
              likes:
                (likes &&
                  Object.entries(likes).map(([id, { authorId }]) => {
                    return { id, authorId };
                  })) ||
                [],
            };
          }
        );
        console.log(parsedQuestions);
        setQuestions(parsedQuestions);
        setRoomAdmin(userId);
        setRoomTitle(title);
        return parsedQuestions;
      });
    };
    getQuestionsByRoom(roomId);
  }, [roomId]);

  return { roomAdmin, roomTitle, questions };
}
