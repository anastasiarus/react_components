import React from "react";
import classes from "./Content.module.css"
import Button from "../Button/Button.jsx";
import Card from "../Card/Card.jsx";


const Content = () => {
    return <div className={classes.content}>
      <Button className={classes.btn}/> 
      <Card id={1} title='РОЗА' text='Ро́за — собирательное название видов и сортов представителей рода Шиповник ' img='https://idrawing.ru/images/articles/070-rose2/rose.jpg' />
      <Card id={2} title='ТЮЛЬПАН' text='Тюльпа́н — род многолетних травянистых луковичных растений семейства Лилейные' img='https://i.pinimg.com/originals/c3/8d/96/c38d968708ddc315827e70fa920b7578.png' />
      <Card id={3} title='ЛАНДЫШ' text='Ла́ндыш — монотипный либо олиготипный род однодольных растений семейства Спаржевые' img='https://printonic.ru/uploads/images/2016/03/26/img_56f6e72c0c70a.jpg' />
      <Card id={4} title='ОДУВАНЧИК' text='Одува́нчик — род многолетних травянистых растений семейства Астровые, или Сложноцветные' img='https://kakrisovat.top/wp-content/uploads/2019/01/dandelion-10.png' />
      <Card id={5} title='ЛАВАНДА' text='Лава́нда — род растений семейства яснотковых' img='https://cdn.pixabay.com/photo/2018/10/29/09/50/lavender-bunch-3780750_1280.png' />
  </div>
}

export default Content