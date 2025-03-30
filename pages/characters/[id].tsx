import {API} from "@/assets/api/api";
import {CharacterType, ResponseType} from "@/assets/api/rick-and-morty-api";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";
import {CharacterCard} from "@/components/Card/CharacterCard/CharacterCard";
import {getLayout} from "@/components/Layout/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";


export const getStaticPaths: GetStaticPaths = async () => {
    const {results} = await API.rickAndMorty.getCharacters();

    const paths = results.map(character => ({
        params: {id: String(character.id)},
    }))

    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {};

    const character = await API.rickAndMorty.getCharacter(id as string);

    if (!character) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            character,
        }
    }
}

type CharacterProps = {
    character: CharacterType
}

const Character = (props: CharacterProps) => {

    const {character} = props;

    const router = useRouter();

    const goToCharacters = () => {
        router.push(`/characters`);
    }

    return (
        <PageWrapper>
            <CharacterCard key={character.id} character={character} />
            <button onClick={goToCharacters}>Go to characters</button>
        </PageWrapper>
    );
};

Character.getLayout = getLayout
export default Character;