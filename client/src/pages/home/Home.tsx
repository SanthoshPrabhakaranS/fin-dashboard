import { Col, Flex, Row } from "antd";
import Container from "../../components/container";
import { useGetAllCustomers } from "../../services/apis/useGetAllCustomers";
import IncomeExpenseChart from "../../components/income-expense-chart";
import RiskScoreChart from "../../components/risk-score-chart";
import ErrorContainer from "../../components/error-container";
import UsersTable from "../../components/users-table";
import Loader from "../../components/loader";
import { useCallback, useEffect, useState } from "react";
import { useUpdateCustomer } from "../../services/apis/useUpdateCustomer";
import Search from "../../components/search";
import { CustomerType } from "../../types/types";
import _ from "lodash";

const Home = () => {
  const { data = [], error, loading, refetch } = useGetAllCustomers();
  const { error: updateErr, updateCustomer } = useUpdateCustomer();
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<CustomerType[]>(data || []);

  const onClickDropdown = useCallback(
    async (status: string, cusId: string) => {
      const customer = filteredData?.find(
        (item: CustomerType) => item.customerId === cusId
      );

      if (customer?.status === status) {
        return;
      }

      await updateCustomer(cusId, status);

      if (updateErr) {
        return console.error(updateErr);
      }
      refetch();
    },
    [filteredData, updateCustomer]
  );

  useEffect(() => {
    if (data) {
      if (debouncedSearch == "") {
        return setFilteredData(data);
      }

      const filData = data.filter((item: CustomerType) => {
        return (
          item.name
            .toLocaleLowerCase()
            .includes(debouncedSearch.toLocaleLowerCase()) ||
          item.customerId
            .toLocaleLowerCase()
            .includes(debouncedSearch.toLocaleLowerCase()) ||
          item.monthlyIncome
            .toString()
            .includes(debouncedSearch.toLocaleLowerCase()) ||
          item.monthlyExpenses
            .toString()
            .includes(debouncedSearch.toLocaleLowerCase()) ||
          item.creditScore
            .toString()
            .includes(debouncedSearch.toLocaleLowerCase()) ||
          item.accountBalance
            .toString()
            .includes(debouncedSearch.toLocaleLowerCase())
        );
      });
      setFilteredData(filData);
    }
  }, [debouncedSearch, debouncedSearch == "", data]);

  const handleOnSearch = useCallback(
    _.debounce((value: string) => {
      setDebouncedSearch(value);
    }, 500),
    []
  );

  const onChange = (value: string) => {
    setSearch(value);
    handleOnSearch(value);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorContainer text="Something went wrong!" refetchFunction={refetch} />
    );
  }

  return (
    <Container>
      <Row className="py-[2rem]" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <IncomeExpenseChart data={data} />
        </Col>
        <Col className="gutter-row" span={12}>
          <RiskScoreChart data={data} />
        </Col>
      </Row>
      <Row className="pb-[2rem]" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <Flex align="center" justify="space-between">
            <h1 className="text-xl font-medium w-full">Users List</h1>
            <Search handleOnSearch={onChange} search={search} />
          </Flex>
          <UsersTable
            data={filteredData ?? []}
            onClickDropdown={onClickDropdown}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
