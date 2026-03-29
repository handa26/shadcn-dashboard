import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

const TodoList = () => {
	return (
		<div className="">
			Calendar
			{/* LIST */}
			<ScrollArea className="max-h-100 mt-4 overflow-y-auto">
				<div className="flex flex-col gap-4">
					{/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
          {/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
          {/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
          {/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
          {/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
          {/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
          {/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
          {/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
          {/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
          {/* LIST ITEM */}
					<Card className="p-4 border">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi, mollitia!
							</label>
						</div>
					</Card>
				</div>
			</ScrollArea>
		</div>
	);
};

export default TodoList;
