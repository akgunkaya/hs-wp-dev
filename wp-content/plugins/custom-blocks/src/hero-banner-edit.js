import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	URLInput,
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";

const HeroBannerEdit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();

	const onSelectImage = (media) => {
		setAttributes({ imageUrl: media.url });
	};

	return (
		<div {...blockProps}>
			<div className="editor-block-container">
				<h3>Hero Banner Section</h3>
				<div>
					<TextControl
						label="Title"
						value={attributes.title}
						onChange={(newTitle) => setAttributes({ title: newTitle })}
					/>
				</div>
				<div>
					<TextControl
						label="Subtitle"
						value={attributes.subtitle}
						onChange={(newSubtitle) => setAttributes({ subtitle: newSubtitle })}
					/>
				</div>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={["image"]}
						value={attributes.imageUrl}
						render={({ open }) => (
							<button onClick={open}>Open Media Library</button>
						)}
					/>
				</MediaUploadCheck>

				{attributes.imageUrl && <img width={100} src={attributes.imageUrl} />}

				<div>
					<TextControl
						label="CTA Button Text"
						value={attributes.ctaButtonText}
						onChange={(newText) => setAttributes({ ctaButtonText: newText })}
					/>
				</div>

				<URLInput
					label="CTA Button Link"
					value={attributes.ctaButtonLink}
					onChange={(newLink) => setAttributes({ ctaButtonLink: newLink })}
				/>
			</div>
		</div>
	);
};

export default HeroBannerEdit;
