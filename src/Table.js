import './Table.css';

const Table = (props) => {

	return (
		<div className="containerd">
			<table>
				<tbody>
				<tr>
				     <th>Symbol</th>
					<th>Name</th>
					<th>Change</th>
					<th>%change</th>
					<th>Volume</th>
					<th>Market Cap</th>
				</tr>
				</tbody>
				<tbody>			
				{props.city.map((item) => {
					return (
						<tr >
						   <td>{item.symbol}</td>
							<td>{item.name}</td>
							<td>{item.change}</td>
							<td>{item.perChange}</td>
							<td>{item.volume}</td>
							<td>{item.market_cap}</td>
						</tr>
					)
				})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
