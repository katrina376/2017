import React, { Component } from 'react'
import paragraphIntro from './paragraphIntro.json'
import paragraphSlogan from './paragraphSlogan.json'
import paragraphAboutUs from './paragraphAboutUs.json'

export default class extends Component {
	render() {
		return (
			<div id="cover-page">

				<div id="cover">
					<img src="images/logo.svg" role="cover-logo" />
					<img src="images/press-start.png" role="cover-press-start" />
					<img src="images/arrow.png" role="cover-arrow" />
				</div>

				<article>
					<h2>Internet For Next Generation</h2>
					{paragraphIntro.map((text, id) => {
						return <p key={id}>{text}</p>;
					})}
				</article>

				<article>
					<section>
						<h2>Innovation &amp; Implementation</h2>
						{paragraphSlogan.map((text, id) => {
							return <p key={id}>{text}</p>;
						})}
					</section>

					<section>
						<h2>About Us</h2>
						{paragraphAboutUs.map((text, id) => {
							return <p key={id}>{text}</p>;
						})}
					</section>

					<a id="code-of-conduct">行為準則 / Code of Conduct </a>
				</article>

			</div>
		)
	}
}
