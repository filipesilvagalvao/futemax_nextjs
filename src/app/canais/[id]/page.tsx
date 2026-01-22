import Channels from "@/functions/Channels"
import styles from "./Canais.module.css"
import { Players } from "@/functions/Players"
import Option_player from "@/components/option_player/Option_player"
type ChannelsPropsPage = {
    params: {
        id: string
    }
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const generateMetadata = async ({ params }: ChannelsPropsPage) => {
    const { id } = await params
    const dataChannel = Channels.find((channel) => {
        return channel.slug === id
    })

    const canonicalUrl = `${baseUrl}/canais/${id}`

    return {
        title: dataChannel?.name,
        description: dataChannel?.metadescription,
        openGraph: {
            images: [
                {
                    url: `/thumb/${dataChannel?.path_img}`,
                    width: 480,
                    height: 270,
                    alt: dataChannel?.name,
                },
            ],
        },
        alternates: {
            canonical: canonicalUrl,
        }
    }
}

async function page({ params }: ChannelsPropsPage) {
    const { id } = await params

    const channel = Channels.find((channel) => {
        return channel.slug === id
    })

    const players = channel && Players[channel.name]

    if (!players) {
        return (<section className={styles.channels__notFound}>
            <p>Desculpe, esse canal não existe</p>
        </section>)
    }

    return (
        <section className={styles.channels}>
            <div className={styles.channels__container}>
                <header className={styles.channels__title}>
                    <h1>Assistir {channel?.name} ao vivo</h1>
                    <p>Categoria: {channel?.category}</p>
                    <div className={styles.channels__social}>
                        <a href={`https://api.whatsapp.com/send?text=Confira%20este%20link:%20${baseUrl}`} target="_blank">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`} target="_blank">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href={`https://t.me/share/url?url=${baseUrl}&text=Confira%20este%20conteúdo`} target="_blank">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                </header>
                <Option_player channels={players} />
                <div className={styles.channels__info}>
                    <h2>Um pouco sobre {channel.name}</h2>
                    <p>{channel.description}</p>
                </div>
            </div>
        </section>
    )
}

export default page