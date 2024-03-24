import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	TextControl,
	Button,
	PanelBody,
	PanelRow,
} from "@wordpress/components";

const GalleryDisplayEdit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();

	const onSelectImage = (newImage) => {
		setAttributes({
			images: [
				...attributes.images,
				{ url: newImage.url, alt: "", caption: "" },
			],
		});
	};

	const updateImageDetails = (index, field, value) => {
		const newImages = [...attributes.images];
		newImages[index] = { ...newImages[index], [field]: value };
		setAttributes({ images: newImages });
	};

	return (
		<div {...blockProps}>
			<div className="editor-block-container">
				<h3>Gallery Section</h3>
				<TextControl
					label="Gallery Title"
					value={attributes.galleryTitle}
					onChange={(newTitle) => setAttributes({ galleryTitle: newTitle })}
				/>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={["image"]}
						render={({ open }) => (
							<Button onClick={open} isSecondary>
								Add Image
							</Button>
						)}
					/>
				</MediaUploadCheck>

				{attributes.images.map((image, index) => (
					<PanelBody
						title={`Image ${index + 1}`}
						initialOpen={false}
						key={index}
					>
						<PanelRow>
							<img src={image.url} alt={image.alt} width={100} />
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Alt Text"
								value={image.alt}
								onChange={(newAlt) => updateImageDetails(index, "alt", newAlt)}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Caption"
								value={image.caption}
								onChange={(newCaption) =>
									updateImageDetails(index, "caption", newCaption)
								}
							/>
						</PanelRow>
					</PanelBody>
				))}
			</div>
		</div>
	);
};

export default GalleryDisplayEdit;
