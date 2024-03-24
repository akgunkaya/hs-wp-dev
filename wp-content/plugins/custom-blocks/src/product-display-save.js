const ProductDisplaySave = ({ attributes }) => {
	return (
		<>
			<div className="product-display-section">
				<div className="container col-xxl-6 px-4 py-5">
					<div className="row align-items-center g-5">
						<div className="col-10 col-sm-8 col-lg-5">
							{attributes.imageUrl && (
								<img
									src={attributes.imageUrl}
									className="d-block mx-lg-auto img-fluid rounded"
									width="700"
									height="500"
									loading="lazy"
								/>
							)}
						</div>
						<div className="col-lg-7">
							<span class="badge rounded-pill pill-badge mb-2">
								{attributes.badgeText}
							</span>
							<h2 className="product-name display-6 fw-bold lh-1 mb-3">
								{attributes.productName}
							</h2>
							<p className="product-description">
								{attributes.productDescription}
							</p>
							<ul className="bullet-points mb-4 p-0">
								{attributes.bulletPoints.map((bullet, index) => (
									<>
										<div className="d-flex list-container">
											<span className="material-symbols-outlined">done</span>

											<li key={index}>{bullet}</li>
										</div>
									</>
								))}
							</ul>
							<div className="d-flex price-container align-items-center">
								<div className="price">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "USD",
									}).format(attributes.price)}
								</div>
								<a href="#" className="btn btn-dark">
									{attributes.ctaText}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDisplaySave;
