export interface Card {
  id : string
  mainIcon: string;
  primaryTitle1: string;
  primaryTitle2: string;
  secondaryTitle: string;
  paragraph: string;
  line: boolean;
  secondaryData: { icon: string; data: string }[];
  keyWord: Array<String>;
}
