import { get, map, groupBy, size } from "lodash";
import { IFormData } from "../../interfaces/IFormData";
import { Container, Point, Empty } from "./styled";

type IDisplayResults = {
    data: IFormData[]
    active: string | null
    activate: (id: string) => void
};

export const DisplayResults = ({ data, active, activate }: IDisplayResults) => {
    const groupedData = groupBy(data, (result) => get(result, 'settings.id'))

    return (
        <>
        {size(groupedData) <= 0 && (
            <Empty>
                <h3>No Answers Yet</h3>
                <img src='/empty.gif' alt='No Answers Yet' />
            </Empty>
        )}

        {map(groupedData, (group, groupId) => (
            <Container active={String(groupId === active)} key={groupId} onClick={() => activate(groupId)}>
                <div>
                    <div>
                        <h2>{get(group[0], 'settings.formTitle')}</h2>
                    </div>
                </div>

                <ul>
                    {map(group, (result, key) => (
                        <li key={key}>
                            <Point>{key + 1}th</Point>

                            <div>
                            {map(get(result, 'fields'), (value, field) => (  
                                <div key={field}>
                                    <strong>{field}:</strong> {value}
                                </div>
                            ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        ))}
        </>
    );
};
