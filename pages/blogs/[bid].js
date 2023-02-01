import {useRouter} from "next/router"
const Post = () => {
    const router=useRouter();
    const {bid}=router.query
  return (
    <>
    <p>Hello:{bid}</p>
    </>
  )
}
export default Post
