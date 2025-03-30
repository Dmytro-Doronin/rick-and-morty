import Image from "next/image";
import Link from "next/link";
import {CharacterType} from '@/assets/api/rick-and-morty-api';
import {Card} from "@/components/Card/Card";
import styled from "styled-components";

const statusImages = {
    Alive: "/statuses/alive.png",
    Dead: "/statuses/dead.png",
    unknown: "/statuses/unknown.png",
};

type PropsType = {
    character: CharacterType;
};

export const CharacterCard = ({ character }: PropsType) => {
    const { id, name, image, status } = character;
    const statusIcon = statusImages[status as keyof typeof statusImages] ?? statusImages.unknown;

    return (
        <Card name={name}>
            <Link href={`/characters/${id}`}>
                <ImageBlock src={image} alt={name} width={300} height={300} priority />
            </Link>
            <StatusIcon src={statusIcon} alt={status} width={20} height={20} />
        </Card>
    );
};

const ImageBlock = styled(Image)`
  object-fit: cover;
`;

const StatusIcon = styled(Image)`
    width: 20px;
    height: 20px;
    margin-top: 8px;
`;