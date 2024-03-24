const GalleryDisplaySave = ({ attributes }) => {
	return (
		<>
			<div className="gallery-section">
				<div className="gallery-container container col-xxl-8 px-4 py-5">
					<h2 className="gallery-title display-6 fw-bold lh-1 mb-3">
						{attributes.galleryTitle}
					</h2>
					<div className="gallery-grid-container">
						<div className="gallery-nav">
							<div className="arrow arrow-left">
								<span class="material-symbols-outlined">arrow_left_alt</span>
							</div>
							<div className="arrow arrow-right">
								<span class="material-symbols-outlined">arrow_right_alt</span>
							</div>
						</div>
						<div className="gallery-grid row">
							{attributes.images.map((image, index) => (
								<div key={index} className="galery-item">
									<div className="gallery-image-container">
										<img
											src={image.url}
											alt={image.alt}
											className="img-fluid rounded"
											loading="lazy"
										/>
										{image.caption && (
											<p className="gallery-image-caption">{image.caption}</p>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="gallery-modal">
					<div className="overlay">
						<div className="content">
							<img className="rounded" src="" alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GalleryDisplaySave;
