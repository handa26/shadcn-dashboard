import CardList from "@/components/CardList";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Page = () => {
	return (
		<div className="">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/users">Users</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>John Doe</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			{/* CONTAINER */}
			<div className="mt-4 flex flex-col xl:flex-row gap-8">
				{/* LEFT */}
				<div className="w-full xl:w-1/2 space-y-6">
					{/* USER BADGES CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">Badge</div>

					{/* INFORMATION CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">Information</div>

					{/* CARD LIST CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<CardList title="Recent Transactions" />
					</div>
				</div>

				{/* RIGHT */}
				<div className="w-full xl:w-2/3 space-y-6">
					{/* USER CARD CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">User Card</div>

					{/* CHART CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
