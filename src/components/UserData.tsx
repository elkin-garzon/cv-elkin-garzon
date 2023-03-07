import { Information } from "../models/information"
import '../styles/UserData.scss';

interface InformationProps {
	dataUser: Information
}
export function UserData({ dataUser }: InformationProps) {

	return (
		<div className="contentSection">
			<section className="container UserData">
					<h1>{dataUser.name}</h1>
				<figure>
					<img src={dataUser.photo} alt={dataUser.name} title={dataUser.name} />
				</figure>

				<a href={dataUser.maskMail}>
					{dataUser.mail}
				</a>
				<a href={dataUser.maskPhone}>
					{dataUser.phone}
				</a>
				<article>
					<p>
						{dataUser.text}
					</p>
				</article>
			</section>
		</div>
	)
}
