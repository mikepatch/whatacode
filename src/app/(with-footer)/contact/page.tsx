import { Linkedin } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/PageContainer";
import { SOCIAL_LINKS } from "@/constants";

export default function ContactPage() {
	const linkedInLink = SOCIAL_LINKS.find((link) => link.label === "LinkedIn")?.href || "";

	return (
		<PageContainer title="contact">
			<section>
				<article className="flex flex-col gap-12">
					<p>Get in touch with me via LinkedIn or email.</p>
					<div className="flex">
						<Link
							href={linkedInLink}
							className="flex items-center gap-2 rounded-sm bg-[#0a66c2] px-4 py-2"
						>
							<Linkedin />
							<span>LinkedIn</span>
						</Link>
					</div>
					<form action="">
						<div className="flex flex-col gap-4">
							<div className="flex flex-col gap-2">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="John Doe"
									className="border-gray-300 rounded-sm border p-2"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="john@example.com"
									className="border-gray-300 rounded-sm border p-2"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									placeholder="Type your message here..."
									className="border-gray-300 rounded-sm border p-2"
								/>
							</div>
							<button type="submit" className="rounded-sm bg-primary px-4 py-2 text-white">
								Send
							</button>
						</div>
					</form>
				</article>
			</section>
		</PageContainer>
	);
}
