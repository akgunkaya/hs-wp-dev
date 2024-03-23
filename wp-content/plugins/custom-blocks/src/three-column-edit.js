import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";
import "./editor.scss";

const ThreeColumnEdit = (props) => {
	const { attributes, setAttributes } = props;
	const { overallTitle, columns } = attributes;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<div className="editor-block-container">
				<h3>Three Column Section</h3>
				<TextControl
					label="Overall Title"
					value={overallTitle}
					onChange={(value) => setAttributes({ overallTitle: value })}
				/>

				<div>
					{columns.map((column, index) => (
						<div key={index}>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											columns: columns.map((col, colIndex) =>
												index === colIndex
													? { ...col, imageUrl: media.url }
													: col,
											),
										})
									}
									allowedTypes={["image"]}
									value={column.imageUrl}
									render={({ open }) => (
										<button onClick={open}>Open Media Library</button>
									)}
								/>
							</MediaUploadCheck>
							{column.imageUrl && (
								<img
									width={100}
									src={column.imageUrl}
									alt={`Column ${index + 1}`}
								/>
							)}
							<TextControl
								label={`Column ${index + 1} Title`}
								value={column.title}
								onChange={(value) =>
									setAttributes({
										columns: columns.map((col, colIndex) =>
											index === colIndex ? { ...col, title: value } : col,
										),
									})
								}
							/>
							<TextControl
								label={`Column ${index + 1} Text`}
								value={column.text}
								onChange={(value) =>
									setAttributes({
										columns: columns.map((col, colIndex) =>
											index === colIndex ? { ...col, text: value } : col,
										),
									})
								}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ThreeColumnEdit;
