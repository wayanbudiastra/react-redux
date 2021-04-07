import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col } from 'reactstrap';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

const { SearchBar } = Search;
const columns = [
	{
		dataField: 'id',
		text: 'ID',
		sort: true,
		headerStyle: () => {
			return { width: '5%' };
		}
	},
	{
		dataField: 'name',
		text: 'Name',
		sort: true
	},
	{
		dataField: 'alamat',
		text: 'Alamat',
		sort: true
	},
	{
		dataField: 'umur',
		text: 'Umur',
		headerStyle: () => {
			return { width: '5%' };
		}
	},
	// {
	// 	dataField: 'nohp',
	// 	text: 'Nomor Handphone'
	// },
	{
		dataField: 'link',
		text: 'Action',
		formatter: (rowContent, row) => {
			return (
				<div>
					<Link to={'detail/' + row.id}>
						<Button color="primary" className="mr-2">
							<FontAwesomeIcon icon={faInfo} /> Detail
						</Button>
					</Link>
					<Link to={'edit/' + row.id}>
						<Button color="warning" className="mr-2">
							<FontAwesomeIcon icon={faEdit} /> Edit
						</Button>
					</Link>

					<Link to={'detail/' + row.id}>
						<Button color="danger" className="mr-2">
							<FontAwesomeIcon icon={faTrash} /> Delete
						</Button>
					</Link>
				</div>
			);
		}
	}
];
const defaultSorted = [
	{
		dataField: 'id',
		order: 'desc'
	}
];

const TableComponent = (props) => {
	return (
		<Container>
			<ToolkitProvider
				bootstrap4
				keyField="id"
				data={props.users}
				columns={columns}
				defaultSorted={defaultSorted}
				search
			>
				{(props) => (
					<div>
						<Row className="mb-3">
							<Col>
								<Link to={'create'}>
									<Button color="success" className="mr-2">
										<FontAwesomeIcon icon={faPlus} /> Add
									</Button>
								</Link>
							</Col>
							<Col>
								<div className="float-right">
									<SearchBar {...props.searchProps} />
								</div>
							</Col>
						</Row>

						<BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
					</div>
				)}
			</ToolkitProvider>
		</Container>
	);
};

export default TableComponent;
