import { useParams, useSearchParams } from "react-router-dom";
import "./style.css";

export const Post = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <section>
      <h1>
        Post {`Param: ${id}`} {`QS: ${qs}`}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        reprehenderit error nesciunt in tenetur commodi eos et atque impedit
        facilis aliquam, architecto praesentium dolorem pariatur placeat ducimus
        fugit magni veniam!
      </p>
    </section>
  );
};
