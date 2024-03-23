const ThreeColumnSave = ({ attributes }) => {
	return (
		<div className="container col-xxl-8 px-4 py-5 ">
			<h2 className="text-center">{attributes.overallTitle}</h2>
			<div className="row three-column-grid">
				{attributes.columns.map((column, index) => (
					<div key={index} className="col-md-4 column">
						{column.imageUrl && (
							<img
								src={column.imageUrl}
								alt={`Column ${index + 1}`}
								className="img-fluid"
							/>
						)}
						<h3>{column.title}</h3>
						<p>{column.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ThreeColumnSave;
