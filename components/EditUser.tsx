"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: "Username must be at least 2 characters!" })
		.max(50),
	email: z.email({ message: "Invalid email address!" }),
	phone: z.string().min(10).max(15),
	location: z.string().min(2),
	role: z.enum(["admin", "user"]),
});

const EditUser = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "john.doe",
			email: "john.doe@gmail.com",
			phone: "+62 831 4159 1960",
			location: "New York, NY",
			role: "user",
		},
	});

	function onSubmit(data: z.infer<typeof formSchema>) {
		// Do something with the form values.
		console.log(data);
	}

	return (
		<SheetContent>
			<SheetHeader>
				<SheetTitle className="mb-4">Edit User</SheetTitle>
				<SheetDescription>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FieldGroup>
							<Controller
								name="username"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="form-rhf-demo-title">
											Username
										</FieldLabel>
										<Input
											{...field}
											id="form-rhf-demo-title"
											aria-invalid={fieldState.invalid}
											autoComplete="off"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
							<Controller
								name="email"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="form-rhf-demo-title">Email</FieldLabel>
										<Input
											{...field}
											id="form-rhf-demo-title"
											aria-invalid={fieldState.invalid}
											autoComplete="off"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
							<Controller
								name="phone"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="form-rhf-demo-title">Phone</FieldLabel>
										<Input
											{...field}
											id="form-rhf-demo-title"
											aria-invalid={fieldState.invalid}
											autoComplete="off"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
							<Controller
								name="location"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="form-rhf-demo-title">
											Location
										</FieldLabel>
										<Input
											{...field}
											id="form-rhf-demo-title"
											aria-invalid={fieldState.invalid}
											autoComplete="off"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
							<Controller
								name="role"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="form-rhf-demo-title">Role</FieldLabel>
										<Select>
											<SelectTrigger>
												<SelectValue placeholder="Role" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="user">User</SelectItem>
													<SelectItem value="admin">Admin</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
						</FieldGroup>

						<Button type="submit" className="w-full">Submit</Button>
					</form>
				</SheetDescription>
			</SheetHeader>
		</SheetContent>
	);
};

export default EditUser;
