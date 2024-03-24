import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	URLInput,
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";

const CustomTestimonialEdit = ({ attributes, setAttributes }) => {
	const testimonials = attributes.testimonials;
	const blockProps = useBlockProps();

	const onSelectImage = (media) => {
		setAttributes({ imageUrl: media.url });
	};

	const updateTestimonial = (index, field, value) => {
		const updatedTestimonials = testimonials.map((testimonial, i) => {
			if (i === index) {
				return { ...testimonial, [field]: value };
			}
			return testimonial;
		});
		setAttributes({ testimonials: updatedTestimonials });
	};

	return (
		<div {...blockProps}>
			<div className="editor-block-container">
				<h3>Custom Testimonial Section</h3>
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

				{testimonials.map((testimonial, index) => (
					<div key={index}>
						<TextControl
							label="Name"
							value={testimonial.name}
							onChange={(newName) => updateTestimonial(index, "name", newName)}
						/>
						<TextControl
							label="Testimonial"
							value={testimonial.text}
							onChange={(newText) => updateTestimonial(index, "text", newText)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CustomTestimonialEdit;
