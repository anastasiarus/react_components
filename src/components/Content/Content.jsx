import React from "react";
import classes from "./Content.module.css";
import Button from "../Button/Button.jsx";
import Card from "../Card/Card.jsx";

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.btnWrapper}>
        <Button className={classes.btn} />
      </div>
      <div className={classes.cards}>
        <Card
          id={1}
          title="Kit-kat"
          text="Хочешь сделать перерыв - съешь Kit-kat"
          img="https://static.tildacdn.com/tild3661-6139-4463-b837-656362313364/0083e4ddd55cae9f785b.png"
        />
        <Card
          id={2}
          title="Snikers"
          text="Не тормози — сникерсни!"
          img="https://русский-разгуляйка.рф/i/t/8acce4329db81cae71b54f6fdb28c4e6-3.jpg"
        />
        <Card
          id={3}
          title="Bounty"
          text="Bounty - райское наслаждение!"
          img="https://avatars.mds.yandex.net/i?id=6749491b00ce50bf83c324604025213e-4602005-images-thumbs&n=13"
        />
        <Card
          id={4}
          title="Mars"
          text="Mars. Все будет в шоколаде!"
          img="https://i.ebayimg.com/00/s/NjQwWDg1Mw==/z/nOEAAOSwDFBaIUVf/$_57.JPG?set_id=8800005007"
        />
        <Card
          id={5}
          title="Twix"
          text="Попробуй обе и реши на чьей стороне ты!"
          img="https://veralline.com/uploads/images/comparison/2016/04/26/0efeee0799.jpg"
        />
      </div>
    </div>
  )
}

export default Content
