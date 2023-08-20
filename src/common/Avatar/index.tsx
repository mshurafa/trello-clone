import Avatar from 'react-avatar'

type Props = {
    name: string,
    color?: string
    size?: string
}

export const AvatarIcon = ({ name, color = "#cdcdcdcd", size }: Props) => {
    return (
        <Avatar round name={name} color={color} size={size} />
    )
}

export default AvatarIcon
