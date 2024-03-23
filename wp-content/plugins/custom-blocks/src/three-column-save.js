const ThreeColumnSave = ({ attributes }) => {
	return (
		<div className="three-column-section">
			<div className="container col-xxl-8 px-4 py-5 ">
				<h2 className="text-center mb-4">{attributes.overallTitle}</h2>
				<div className="row three-column-grid">
					{attributes.columns.map((column, index) => (
						<div key={index} className="col-md-4 column text-center">
							{column.imageUrl && (
								<img
									src={column.imageUrl}
									alt={`Column ${index + 1}`}
									className="img-fluid rounded"
								/>
							)}
							<h3 className="mt-2">{column.title}</h3>
							<p>{column.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ThreeColumnSave;
