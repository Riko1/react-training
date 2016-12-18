var articles = [
	{
		id: 0,
		title: 'Lorem ipsum dolor sit amet',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia est quaerat doloribus a inventore temporibus voluptatem doloremque porro dolores quidem quae dolorum officiis quam quos voluptatibus tempore, deserunt nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo vel illum in corporis, doloremque veritatis doloribus non, fugit libero, fuga aut. Nemo hic laudantium deserunt sapiente culpa, nostrum! Vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde neque tenetur enim sint mollitia voluptate sunt ea quas nesciunt accusamus commodi inventore, vel odit aperiam porro repellat, earum accusantium totam.',
		author: {
			name: 'somebody somebodyevich',
			id: 0,
			toString: function () { return this.name }
		}
	},
	{
		id: 1,
		title: 'Title2 rs gr',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officia est quaerat doloribus a inventore temporibus voluptatem doloremque porro dolores quidem quae dolorum officiis quam quos voluptatibus tempore, deserunt nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo vel illum in corporis, doloremque veritatis doloribus non, fugit libero, fuga aut. Nemo hic laudantium deserunt sapiente culpa, nostrum! Vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde neque tenetur enim sint mollitia voluptate sunt ea quas nesciunt accusamus commodi inventore, vel odit aperiam porro repellat, earum accusantium totam.',
		author: {
			name: 'somebody2 olgovich',
			id: 1,
			toString: function () { return this.name }
		}
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor sit',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, veritatis! Id excepturi quo odit obcaecati dolorum omnis facilis quam consequatur ipsam a asperiores nobis unde, laborum nemo explicabo ex, natus. Omnis vel sequi impedit eius. Corporis facere exercitationem eos, esse, et delectus dignissimos quae, reiciendis soluta sequi adipisci vel ipsa repellendus laborum accusamus quasi omnis nulla hic! Omnis atque voluptates iste optio! Sed consectetur fugit voluptas, earum, aperiam placeat. Nostrum?	',
		author: {
			name: 'somebody3 Gerasimovns',
			id: 2,
			toString: function () { return this.name }
		}
	}
];

var users = {
	0: {
		name: 'Sergey',
		patr: 'Mikhailovich',
		dateBirth: '26.03.1995'
	},
	1: {
		name: 'Maxim',
		patr: 'Maximovich',
		dateBirth: '01.07.1995'
	},
	2: {
		name: 'Vadim',
		patr: 'Vadimovich',
		dateBirth: '30.01.2000'
	}
}


export { articles, users };