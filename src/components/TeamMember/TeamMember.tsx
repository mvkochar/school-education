import classes from './TeamMember.module.css'

type TeamMemberProps = {
    id: number
    image: string
    name: string
    qualification: string
    description: string
}

const TeamMember = ({ image, name, qualification, description }: TeamMemberProps) => {
    return (
        <div className={classes.team_member}>
            <div className={classes.team_member_top}>
                <div className={classes.team_member_author}>
                    <div><img src={image} alt="author" /></div>
                    <h4 className={classes.author_name}>{name}</h4>
                </div>
                <a href="mailto:" className={classes.team_member_contact}>
                    <img src="/images/email-send.png" alt="email-send" />
                </a>
            </div>
            <div className={classes.team_member_info}>
                <p className={classes.team_member_qualification}>Qualification: {qualification}</p>
                <p className="team_member_desc">{description}</p>
            </div>
        </div>
    )
}

export default TeamMember