export interface ItemMenuInterface {
  key: string;
  label: string;
  children: { key: string; label: string }[];
}
