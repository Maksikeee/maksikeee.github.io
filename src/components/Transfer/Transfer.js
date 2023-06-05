import React from "react";
import "./Transfer.css";
import { List } from "antd";
const listData = [
  {
    title: "1. Оставляете заявку или связываетесь с нами",
    description: "Агент оговаривает с вами все детали поездки.",
  },
  {
    title: "2. Подготовка к вылету",
    description:
      "Мы поготавливаем вас к таможенному контролю. Помогаем забронировать отель и купить билет.",
  },
  {
    title: "3. Прилёт в Израиль",
    description:
      "По прилёту вы встречаетесь с нашим куратором в Израиле. Он вас заселяет, предлагает вакансии, договаривается о собеседованиях, помогает заключить контракт.",
  },
  {
    title: "4. Оформление документов",
    description:
      "Наш адвокат помогает вам подгтовить документы для подачи заявки, для получения визы Алеф-5. Этот документ вам позволит легально пребывать в страине и работать до четырех лет.",
  },
  {
    title: "5. Заключение договора",
    description:
      "Заключается договор о сотрудничестве между вами и нашим агенством.",
  },
  {
    title: "6. Начало вашего пути в Израиле",
    description: "Выходите на работу и начинаете зарабатывать.",
  },
];
export const Transfer = () => {
  return (
    <div className="transfer">
      <h3>ЭТАПЫ ПРЕЛЁТА В ИЗРАИЛЬ</h3>
      <div className="transfer__wrapper">
        <List
          itemLayout="horizontal"
          dataSource={listData}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                key={index}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
