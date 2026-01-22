import Titleh1 from '@/components/titleh1/Titleh1'
import Channels from '@/functions/Channels'
import Post_chanel from '@/components/post_channel/Post_channel'
import styles from "./All_channels.module.css"

function page() {
  return (
    <main className={styles.allChannels}>
        <Titleh1 text="Todos os canais"/>
        <div className={styles.allChannels__container}>
            {Channels.map((channel) => (
                <Post_chanel 
                    alt_img={channel.name}
                    img_link={channel.path_img}
                    link_post={channel.slug}
                    title={channel.name}
                    key={channel.name}
                />
            ))}
        </div>
    </main>
  )
}

export default page