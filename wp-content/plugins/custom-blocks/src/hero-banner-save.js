const HeroBannerSave = ({ attributes }) => {
	return (
		<>
			<div className="container col-xxl-8 px-4 py-5">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-5">
						<img
							src={attributes.imageUrl}
							className="d-block mx-lg-auto img-fluid rounded"
							width="700"
							height="500"
							loading="lazy"
						/>
					</div>
					<div className="col-lg-7">
						<h1 className="display-5 fw-bold lh-1 mb-3">{attributes.title}</h1>
						<p className="lead">{attributes.subtitle}</p>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start">
							<a href={attributes.ctaButtonLink} class="btn btn-dark">
								{attributes.ctaButtonText}
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroBannerSave;
