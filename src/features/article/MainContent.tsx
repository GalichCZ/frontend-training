import CreatorSpan from "../../UI/CreatorSpan";
import img from "../../assets/img.png";

const textMock =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturblanditiis minus natus deleniti rem fugiat possimus quisquamperspiciatis quae. \nQuaerat quidem, neque dolore possimus saepelaboriosam cupiditate illum. Quos in corrupti vitae, eligendi utmolestias aliquid impedit blanditiis beatae? Quia quibusdam natus abnesciunt rerum laborum ratione ipsam id, fugit maiores recusandaetempora quis harum cumque vitae asperiores ut commodi qui! Deleniti adofficia quasi necessitatibus quae velit itaque praesentium in deseruntsaepe, excepturi sit ea incidunt temporibus consequuntur reiciendisiusto unde optio voluptates aspernatur ducimus et tempore. \nAliquidsapiente veniam unde eaque, necessitatibus quidem doloribus quo dolorumdoloremque! Obcaecati nihil porro alias omnis voluptatibus a evenietcommodi dolor sequi dolorum, molestias suscipit aliquam distinctio,dignissimos necessitatibus recusandae inventore mollitia. Magnaminventore soluta libero iure consectetur esse ad quod, doloresexercitationem mollitia quibusdam id architecto voluptatem quosblanditiis non fugit. Nisi, laudantium. A impedit veritatis ducimus!Obcaecati exercitationem minus voluptatum itaque, fugit evenietvoluptatibus culpa ex temporibus quaerat ipsum facere eius blanditiissapiente! Nemo, nostrum et minima mollitia aperiam praesentiumasperiores architecto optio labore dolorum deleniti qui hic quibusdamperspiciatis explicabo numquam ex, dolore totam, blanditiis unde sunt.Vel magni laboriosam excepturi inventore rem numquam quisquamrepudiandae tempora sapiente maiores, perspiciatis dolores officia quodiure reiciendis atque quidem autem dolorem maxime eaque animi assumendaodit aspernatur! Neque ab minima labore temporibus delectus? \nRepellattempora molestiae explicabo odit necessitatibus sunt nisi, iste, harumquas non quasi vitae quaerat, ex autem earum maxime! Et quis suscipitsunt sed dolore quidem, accusantium deleniti obcaecati harum istepraesentium reprehenderit, modi voluptates. Repudiandae non molestiasveritatis accusantium ducimus, numquam fugit rerum magni quia ipsumcupiditate aliquid veniam impedit, rem dolorem natus doloribuslaboriosam, tenetur magnam quibusdam nesciunt ab facilis! Qui optio nisirepellendus, consectetur libero suscipit, ex non totam quas accusantiumin? Ratione, ipsam omnis!";

const MainContent = () => {
  const splittedText = textMock.split("\n");

  return (
    <div className="article-content--main">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <CreatorSpan creator="John Reed" date="27/11/2023" />
      <img src={img} alt="" />
      {splittedText.map((text, key) => (
        <p key={key}>{text}</p>
      ))}
    </div>
  );
};

export default MainContent;
