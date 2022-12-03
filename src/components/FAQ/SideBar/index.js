import React from 'react';
import { FooterContent } from '../../Footer/FooterContent.js';
import { Accordion } from 'react-bootstrap';
import './index.css';
const SideBar = () => {
	return (
		<div>
			<div className='left-section-faq'>
				{FooterContent.options.map((option, i) => {
					return (
						<>
							{option.rows.map((category, i) => {
								return (
									<>
										{category.name === 'Shop' ? (
											<div className='list-items'>
												<p>{category.name}</p>
												{category.content.map((subcategory, i) => (
													<p className='fdc-content'>
														{subcategory.name}
													</p>
												))}
											</div>
										) : null}
									</>
								);
							})}
						</>
					);
				})}
			</div>
			<Accordion className='accordion-left-section-faq'>
				{FooterContent.options.map((option, i) => {
					return (
						<>
							{option.rows.map((category, i) => {
								return (
									<>
										{category.name === 'Shop' ? (
											<Accordion.Item eventKey='0'>
												<Accordion.Header>
													{category.name}
												</Accordion.Header>
												{category.content.map((subcategory, i) => (
													<Accordion.Body>
														{subcategory.name}
													</Accordion.Body>
												))}
											</Accordion.Item>
										) : null}
									</>
								);
							})}
						</>
					);
				})}
			</Accordion>
		</div>
	);
};

export default SideBar;
