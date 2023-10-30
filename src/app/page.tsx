import getAcfPageFields from "../hooks/getAcfPageFields"

export default async function Home() {
  const fields = await getAcfPageFields("homepage")
  console.log(fields)
  return (
    <h1>{fields.description}</h1>
  )
}
