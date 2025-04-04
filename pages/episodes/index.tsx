import {API} from "@/assets/api/api";
import {CharacterType, EpisodeType, ResponseType} from "@/assets/api/rick-and-morty-api";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";
import {Header} from "@/components/Header/Header";
import {Card} from "@/components/Card/Card";
import {getLayout} from "@/components/Layout/Layout";

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes();

    return {
        props: {
            episodes,
        }
    }
}

type EpisodesProps = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = (props: EpisodesProps) => {

    const {episodes} = props;

    const episodesList = episodes.results.map((episodes: EpisodeType) => (
        <Card key={episodes.id} name={episodes.name}></Card>
    ))

    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    );
};


Episodes.getLayout = getLayout
export default Episodes;