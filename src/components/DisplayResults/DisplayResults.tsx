import { get, map, groupBy } from "lodash";
import { IFormData } from "../../interfaces/IFormData";

type IDisplayResults = {
    data: IFormData[];
};

export const DisplayResults = ({ data }: IDisplayResults) => {
    const groupedData = groupBy(data, (result) => get(result, 'settings.id'));

    return (
        <div>
            {map(groupedData, (group, groupId) => (
                <div key={groupId}>
                    <h3>{get(group[0], 'settings.formTitle')}</h3>
                    <ul>
                        {map(group, (result, key) => (
                            <li key={key}>
                                {map(get(result, 'fields'), (value, field) => (
                                    <div key={field}>
                                        <strong>{field}:</strong> {value}
                                    </div>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
