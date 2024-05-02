export default function Page() {
  console.log('process.env.PRIVATE_VAR', process.env.PRIVATE_VAR);
  return (<>
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maxime placeat commodi doloremque impedit deserunt aliquid explicabo, ad ipsum illo beatae, ipsam quas totam, praesentium sit. Ipsam ex doloribus quibusdam!</p>
  </>)
}