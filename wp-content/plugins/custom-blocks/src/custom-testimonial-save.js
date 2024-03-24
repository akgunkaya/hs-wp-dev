const CustomTestimonialSave = ({ attributes }) => {
	return (
		<>
			<div className="custom-testimonial-section">
				<div className="container col-xxl-6 px-4">
					<div className="text-center">
						<span class="badge rounded-pill pill-badge">Testimonial</span>
						<h2>{attributes.title}</h2>
						<p className="lead">{attributes.subtitle}</p>
					</div>
					<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
						<div className="col-10 col-sm-8 col-lg-6 mt-0">
							<img
								src={attributes.imageUrl}
								className="d-block mx-lg-auto img-fluid rounded"
								width="700"
								height="500"
								loading="lazy"
							/>
						</div>
						<div className="col-lg-6">
							<div className="d-grid gap-2 d-md-flex justify-content-md-start">
								<div className="testimonials">
									<div className="row">
										{attributes.testimonials.map((testimonial, index) => (
											<div key={index} className="col-md-6 mb-4">
												<div className="testimonial">
													<h5 className="testimonial-name fw-bold">
														{testimonial.name}
													</h5>
													<p className="testimonial-text">{testimonial.text}</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CustomTestimonialSave;
