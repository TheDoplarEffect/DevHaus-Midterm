export type EmojiLib =
  | "Romance"
  | "Crime"
  | "History"
  | "Action"
  | "Documentary"
  | "Horror"
  | "Adventure"
  | "Drama"
  | "Music"
  | "Animation"
  | "Family"
  | "Mystery"
  | "Comedy"
  | "Fantasy"
  | "Science Fiction"
  | "Thriller"
  | "Unknown";
type Emoji = {
  name: string;
  icon: string;
};
export const emojiIcons: Record<string, Emoji> = {
  "28": {
    name: "Action",
    icon: "๐งจ",
  },
  "12": {
    name: "Adventure",
    icon: "๐",
  },
  "16": {
    name: "Animation",
    icon: "๐ฆ",
  },
  "35": {
    name: "Comedy",
    icon: "๐คฃ",
  },
  "80": {
    name: "Crime",
    icon: "๐",
  },
  "99": {
    name: "Documentary",
    icon: "๐ฅ",
  },
  "18": {
    name: "Drama",
    icon: "๐ญ",
  },
  "10751": {
    name: "Family",
    icon: "๐ช",
  },
  "14": {
    name: "Fantasy",
    icon: "๐ฆ",
  },
  "36": {
    name: "History",
    icon: "โณ",
  },
  "27": {
    name: "Horror",
    icon: "๐ช",
  },
  "10402": {
    name: "Music",
    icon: "๐ง",
  },
  "9648": {
    name: "Mystery",
    icon: "๐",
  },
  "10749": {
    name: "Romance",
    icon: "๐",
  },
  "878": {
    name: "Science Fiction",
    icon: "๐ฝ",
  },
  "53": {
    name: "Thriller",
    icon: "๐ฑ",
  },
  "420": {
    name: "Unknown",
    icon: "โ",
  },
};
type InputProps = {
  id: number;
};
export function Emogi({ id }: InputProps) {
  return (
    <div className="gap-2 flex flex-col justify-center w-14">
      <p className="text-3xl flex justify-center items-center w-14 h-14 bg-dark-light rounded-xl">
        {emojiIcons[id].icon}
      </p>
      <p className="text-white-dimmed text-secondary flex justify-center">
        {emojiIcons[id].name}
      </p>
    </div>
  );
}
