import { Outlet, useParams, useSearchParams } from "react-router-dom";
import "./style.css";

export const Postes = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <section>
      <h1>
        Post {`Param: ${id}`} {`QS: ${qs.get("segunda")}`}
      </h1>
      <Outlet />
    </section>
  );
};
