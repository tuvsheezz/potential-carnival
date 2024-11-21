import { useParams, useSearchParams } from "react-router-dom";

const Page3 = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");

  console.log(searchParams);

  return (
    <div>
      <h1>Page3</h1>
      <div dangerouslySetInnerHTML={{ __html: from || "" }} />
      <div dangerouslySetInnerHTML={{ __html: id || "" }} />
    </div>
  );
}
export default Page3;