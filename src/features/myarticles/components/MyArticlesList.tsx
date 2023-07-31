import { Button } from "@mui/material";
import React from "react";
import { IArticle } from "../../../Types/Article";
import AdminHead from "../../../UI/AdminHead";
import { stringCut } from "../../../utils/stringCut";
import ArticleRow from "./ArticleRow";
import ArticlesListHead from "./ArticlesListHead";

const items: IArticle[] = [
  {
    title: "Item 1",
    perex: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Doe",
    numOfComs: 5,
    id: "item_1",
  },
  {
    title: "Item 2",
    perex: "Praesent nec sapien ac turpis volutpat mattis.",
    author: "Jane Smith",
    numOfComs: 8,
    id: "item_2",
  },
  {
    title: "Item 3",
    perex: "Vestibulum sed enim nec sapien euismod aliquet.",
    author: "Mike Johnson",
    numOfComs: 12,
    id: "item_3",
  },
  {
    title: "Item 4",
    perex: "Nulla et felis vel velit fringilla faucibus.",
    author: "Emily Brown",
    numOfComs: 3,
    id: "item_4",
  },
  {
    title: "Item 5",
    perex: "Integer auctor libero vitae nunc vehicula congue.",
    author: "Robert Lee",
    numOfComs: 7,
    id: "item_5",
  },
  {
    title: "Item 6",
    perex: "Fusce pharetra odio ut neque consectetur.",
    author: "Laura Taylor",
    numOfComs: 9,
    id: "item_6",
  },
  {
    title: "Item 7",
    perex: "Sed nec ligula eget mi placerat rhoncus.",
    author: "David Clark",
    numOfComs: 2,
    id: "item_7",
  },
  {
    title: "Item 8",
    perex: "Aliquam erat volutpat. Etiam euismod nisi in vestibulum tincidunt.",
    author: "Sarah White",
    numOfComs: 15,
    id: "item_8",
  },
  {
    title: "Item 9",
    perex: "Cras sit amet erat vel odio posuere tristique.",
    author: "Michael Green",
    numOfComs: 6,
    id: "item_9",
  },
  {
    title: "Item 10",
    perex: "Morbi et nisi vel augue scelerisque accumsan nec eu metus.",
    author: "Jennifer Hall",
    numOfComs: 11,
    id: "item_10",
  },
];

const MyArticlesList = () => {
  return (
    <div className="myarticles-list">
      <AdminHead title="My articles" buttonName="Create new article" />
      <ArticlesListHead />
      {items.map((item) => (
        <ArticleRow
          key={item.id}
          title={stringCut(item.title)}
          perex={item.perex}
          author={item.author}
          numOfComs={item.numOfComs}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default MyArticlesList;
