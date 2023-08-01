type Meta = {
  id: string;
  title: string;
  date: string;
};

type Article = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
