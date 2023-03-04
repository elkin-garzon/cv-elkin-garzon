import { Information } from "../models/information"
import '../styles/UserData.scss';

interface InformationProps {
	dataUser: Information
}
export function UserData({ dataUser }: InformationProps) {

	return (
		<div className="UserData contentSection">
			<h1>{dataUser.name}</h1>
			<article>
				<figure>
					<img src={dataUser.photo} alt={dataUser.name} title={dataUser.name} />
				</figure>
				<p>
					<a href={dataUser.maskMail}>
						{dataUser.mail}
					</a>
				</p>
				<p>
					<a href={dataUser.maskPhone}>
						{dataUser.phone}
					</a>
				</p>
			</article>
		</div>
	)
}
