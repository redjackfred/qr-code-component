export default function QRCodeComponent() {
	return (
		<div className="bg-white rounded-2xl p-4 w-fit text-center m-auto">
			<div className="w-72 flex flex-col">
				<img src="/images/image-qr-code.png" className="w-72 h-72 rounded-xl" />
				<div className="px-4 my-6">
					<h1 className="text-[22px] text-slate-900 font-bold mb-4 tracking-normal leading-[120%] font-display">
						Improve your front-end skills by building projects
					</h1>
					<p className="text-slate-500 text-[15px] tracking-wide font-display">
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</p>
				</div>
			</div>
		</div>
	);
}
