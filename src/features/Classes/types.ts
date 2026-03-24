type classDataItemType = {
  id: string;
  item: string;
}

export type classDataType = {
  id: string;
  title: string;
  img: string;
  items: classDataItemType[];
};
