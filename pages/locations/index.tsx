import {LocationType, ResponseType} from "@/assets/api/rick-and-morty-api";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";
import {Header} from "@/components/Header/Header";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {Card} from "@/components/Card/Card";
import {getLayout} from "@/components/Layout/Layout";


const getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location').then(res => res.json())
}

export const getStaticProps = async () => {

    const queryClient = new QueryClient();

    await queryClient.fetchQuery({
        queryKey: ['location'],
        queryFn: getLocations,
    })

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        }
    }
}


const Locations = () => {

    const { data: locations } = useQuery<ResponseType<LocationType>>({
        queryKey: ['location'],
        queryFn: getLocations,
    })

    if (!locations) {
        return null
    }

    const locationsList = locations.results.map((locations: LocationType) => (
        <Card key={locations.id} name={locations.name}></Card>
    ))

    return (
        <PageWrapper>
            {locationsList}
        </PageWrapper>
    );
};

Locations.getLayout = getLayout

export default Locations;