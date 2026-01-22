import Link from "next/link"
import styles from "./Post_channel.module.css"

type Post_chanelProps = {
    title: string,
    img_link: string,
    alt_img: string,
    link_post: string
}

function Post_chanel({ title, img_link, alt_img, link_post }: Post_chanelProps) {
    return (
        <article title={title} className={styles.post__channel}>

            <img
                src={"/thumb/" + img_link || "/img_unknow/unknow.png"}
                alt={alt_img}
                className={styles.post__channelThumb}
            />

            <Link href={"/canais/" + link_post} className={styles.post__channelLink}>
                <i className="fa-solid fa-circle-play"></i>
            </Link>
        </article>
    )
}

export default Post_chanel