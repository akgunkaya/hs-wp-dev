import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	TextControl,
	TextareaControl,
	PanelBody,
	PanelRow,
	Button,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const ProductDisplayEdit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();
	const [bulletPoints, setBulletPoints] = useState(
		attributes.bulletPoints || [],
	);

	const onSelectImage = (media) => {
		setAttributes({ imageUrl: media.url });
	};

	const addBulletPoint = () => {
		const newBulletPoints = [...bulletPoints, ""];
		setBulletPoints(newBulletPoints);
		setAttributes({ bulletPoints: newBulletPoints });
	};

	const updateBulletPoint = (value, index) => {
		const newBulletPoints = bulletPoints.map((item, i) =>
			i === index ? value : item,
		);
		setBulletPoints(newBulletPoints);
		setAttributes({ bulletPoints: newBulletPoints });
	};

	const removeBulletPoint = (index) => {
		const newBulletPoints = bulletPoints.filter((_, i) => i !== index);
		setBulletPoints(newBulletPoints);
		setAttributes({ bulletPoints: newBulletPoints });
	};

	return (
		<div {...blockProps}>
			<div className="editor-block-container">
				<h3>Product Display Section</h3>
				<TextControl
					label="Badge Text"
					value={attributes.badgeText}
					onChange={(newText) => setAttributes({ badgeText: newText })}
				/>
				<TextControl
					label="Product Name"
					value={attributes.productName}
					onChange={(newName) => setAttributes({ productName: newName })}
				/>
				<TextareaControl
					label="Product Description"
					value={attributes.productDescription}
					onChange={(newDescription) =>
						setAttributes({ productDescription: newDescription })
					}
				/>
				<PanelBody title="Bullet Points">
					{bulletPoints.map((bullet, index) => (
						<PanelRow key={index}>
							<TextControl
								value={bullet}
								onChange={(newValue) => updateBulletPoint(newValue, index)}
							/>
							<Button isDestructive onClick={() => removeBulletPoint(index)}>
								Remove
							</Button>
						</PanelRow>
					))}
					<Button isSecondary onClick={addBulletPoint}>
						Add Bullet Point
					</Button>
				</PanelBody>
				<TextControl
					label="Price"
					type="number"
					value={attributes.price}
					onChange={(newPrice) =>
						setAttributes({ price: parseInt(newPrice, 10) })
					}
				/>
				<TextControl
					label="CTA Text"
					value={attributes.ctaText}
					onChange={(newText) => setAttributes({ ctaText: newText })}
				/>
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
			</div>
		</div>
	);
};

export default ProductDisplayEdit;
